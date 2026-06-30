const mongoose = require('mongoose');


// outline of schema

/**
 * 
 * // user input
 * -job description : string
 * - resume text : string
 * - self description : String
 * 
 * //Output
 * -matchScore : number
 * 
 * -technical questions :[{
 *    questions:"",
 *    intention:"",
 *    answer:"",
 * }]
 * -behavioural questions :[{
 *    questions:"",
 *    intention:"",
 *    answer:"",
 * }]
 * 
 * - skill Gaps :[{
 *    skill :"",
 *    severity :{
 *      type: string,
 *      enum :["low" , "medium" , "High"]
 *    }
 * }]
 * 
 * - preparation plan :[{
 *    day: number,
 *    focus: string,
 *    task:[string]
 * }]
 */



const technicalQuestionsSchema = new mongoose.Schema({
  question :{
    type : String ,
    required :[ true , "question is required"]
  },
  intention : {
    type : String ,
    required :[ true , "intention is required"]    
  },
  answer :{
    type : String ,
    required : [true , "Answer is required "]
  }
},{
  _id : false
})

const behaviouralQuestionSchema = new mongoose.Schema({
  question :{
    type : String ,
    required :[ true , "question is required"]
  },
  intention : {
    type : String ,
    required :[ true , "intention is required"]    
  },
  answer :{
    type : String ,
    required : [true , "Answer is required "]
  }
},{
  _id : false
})

const skillGapSchema = new mongoose.Schema({
  skill : {
    type : String ,
    required : [ true , "Skill is required "]
  },
  severity : {
    type : String ,
    enum : [ "low" , "medium" , "high" ],
    required : [ true , "Severity is required"]
  }
},{
  _id : false
})

const preparationPlanSchema = new mongoose.Schema({
  day :{
    type : String ,
    required : [true , "day is required"]
  },
  focus :{
    type : string ,
    required : [true , "Focus is required "]
  },
  tasks :{
    type : String ,
    required : [ true , " tasks are required "]
  }
})

const interveiwReportSchema =  new mongoose.Schema({
  jobDescription:{
    type : String ,
    required:[true , "Job description is required"]
  },

  resumeText:{
    type : String ,
    required:[true , "Resume text is required"]
  },

  selfDescription:{
    type : String 
  },

  matchScore:{
    type : Number ,
    min : 0 , 
    max : 100, 
  }, 

  // to make code more readable we make subschemas and embed it here
  technicalQuestions: [technicalQuestionsSchema],
  behaviouralQuestions: [behaviouralQuestionSchema],
  skillGaps : [skillGapSchema],
  preparationPlan : [preparationPlanSchema]

},{
  timestamps : true
})

// create the model of the schema , and export it

const interivewReportModel = mongoose.model("InterviewReport",interveiwReportSchema);

module.exports = interivewReportModel;