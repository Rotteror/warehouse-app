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
  GraphQLEnumType,
  GraphQLInt,
} = require("graphql");

// Warehouse Type
const WarehouseType = new GraphQLObjectType({
  name: "Warehouse",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    status: { type: GraphQLString },
    size: { type: GraphQLInt },
    products: {
      type: ProductType,
      resolve(parent, args) {
        return Product.findById(parent.clientId);
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
    unit: { type: GraphQLInt },
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
    amount: { type: GraphQLInt },
    created_At: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    warehouses: {
      type: new GraphQLList(WarehouseType),
      resolve(parent, args) {
        return Warehouse.find();
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
    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        typeProduct: {
          type: new GraphQLEnumType({
            name: "ProductStatus",
            values: {
              hazard: { value: "Hazard" },
              nonhazard: { value: "Non Hazard" },
            },
          }),
          defaultValue: "Neutral",
        },
        unit: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        console.log(args)
        const product = new Product({
          name: args.name,
          typeProduct: args.typeProduct,
          unit: args.unit,
        });
        console.log(product, 'in server, schema')
        return product.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
