
const graphQL = require('graphql');
const {taskList} = require('../../data/data.json')
// const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLList, GraphQLID } = graphQL;

const TaskType = new GraphQLObjectType({
    name: "Task",
    fields:{
        id:{type: GraphQLString},
        name:{type: GraphQLString},
        status:{type: GraphQLString}
    }
})
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        task: {
            type: TaskType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                console.log(typeof (args.id));
                // console.log(books.find(bk => bk.id === args.id));
                return taskList.find(task => task.id === args.id)
                //
            }
        },
        tasks:{
            type: new GraphQLList(TaskType),
            resolve(parent, args){
                return taskList;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})