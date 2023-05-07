const Warehouse = require("../models/Warehouse");
const Product = require("../models/Product");
const History = require("../models/History");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

// Warehouse Type
const WarehouseType = new GraphQLObjectType({
  name: "Warehouse",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    status: { type: GraphQLString },
    size: { type: GraphQLString },
    products: {
      type: ProductType,
      resolve(parent, args) {
        return Product.findById(parent.clientId);
      },
    },
    history: {
      type: HistoryType,
      resolve(parent, args) {
        return History.findById(parent.clientId);
      },
    },
  }),
});

// Product Type
const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    typeProduct: { type: GraphQLString },
    unit: { type: GraphQLString },
  }),
});

const HistoryType = new GraphQLObjectType({
  name: "History",
  fields: () => ({
    id: { type: GraphQLID },
    history_type: { type: GraphQLString },
    productId: {
      type: ProductType,
      resolve(parent, args) {
        return Product.findById(parent.clientId);
      },
    },
    amount: { type: GraphQLString },
    created_At: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    warehouses: {
      type: new GraphQLList(WarehouseType),
      resolve(parent, args) {
        return Warehouse.find().populate("products").populate("history");
      },
    },
    warehouse: {
      type: WarehouseType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Warehouse.findById(args.id);
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find();
      },
    },
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.findById(args.id);
      },
    },
    history: {
      type: HistoryType,
      resolve(parent, args) {
        return History.find();
      },
    },
    history_by_id: {
      type: HistoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return History.findById(args.id);
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Product
    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        typeProduct: { type: GraphQLNonNull(GraphQLString) },
        unit: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const product = new Product({
          name: args.name,
          typeProduct: args.typeProduct,
          unit: args.unit,
        });

        return product.save();
      },
    },
    updateProduct: {
      type: ProductType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        typeProduct: { type: GraphQLNonNull(GraphQLString) },
        // typeProduct: {
        //   type: new GraphQLEnumType({
        //     name: "ProductStatusUpdate",
        //     values: {
        //       hazard: { value: "Hazard" },
        //       nonhazard: { value: "Non Hazard" },
        //     },
        //   }),
        //   defaultValue: "Neutral",
        // },
        unit: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        return await Product.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              typeProduct: args.typeProduct,
              unit: args.unit,
            },
          },
          { new: true }
        );
      },
    },
    //Warehouse
    addWarehouse: {
      type: WarehouseType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        status: { type: GraphQLNonNull(GraphQLString) },
        size: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const warehouse = new Warehouse({
          name: args.name,
          status: args.status,
          size: args.size,
          products: [],
          history: [],
        });

        return warehouse.save();
      },
    },
    updateWarehouse: {
      type: ProductType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        productId: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        typeProduct: { type: GraphQLNonNull(GraphQLString) },
        unit: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const productTobeAdded = new Product({
          _id: args.productId,
          name: args.name,
          typeProduct: args.typeProduct,
          unit: args.unit,
        });

        const historyRecord = new History({
          history_type: "Import",
          productId: productTobeAdded._id,
          amount: productTobeAdded.unit,
        });

        const warehouse = await Warehouse.findById(args.id).populate(
          "products"
        );

        const item = warehouse.products.find(
          (item) => item._id == productTobeAdded.id
        );

        if (item) item.unit = Number(item.unit) + Number(args.unit);
        else warehouse.products.push(productTobeAdded);
        warehouse.history.push(historyRecord);
        await warehouse.save();

        //upsert create new document if no exist
        // return await Warehouse.findByIdAndUpdate(
        //   args.id,
        //   {
        //     $set: {
        //       products: productTobeAdded,
        //       history: historyRecord,
        //     },
        //   },
        //   { upsert: true }
        // );
      },
    },
    deleteProduct: {
      type: ProductType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        return await Product.findByIdAndDelete(args.id);
      },
    },
    // History
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
