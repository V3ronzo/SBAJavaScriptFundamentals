// / The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
    const learnerArray = [];

for (let i = 0; i < LearnerSubmissions.length; i++) {
      const submission = LearnerSubmissions[i];

      if ((submission.learner_id === 125 || submission.learner_id === 132) && submission.assignment_id <=2)
{
  learnerArray.push(submission);
}
      

    studentsId.push(LearnerSubmissions[j].learner_id) ;
    
  }
    
  // here, we would process this data to achieve the desired result.
  /*const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];*/
const result={};
  return result;
}
// const learner125 = LearnerSubmissions[0].learner_id;
//   const avg = (LearnerSubmissions[0].submission.score + LearnerSubmissions[1].submission.score) / (AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible); 
//   const one = (LearnerSubmissions[0].submission.score) / (AssignmentGroup.assignments[0].points_possible);
//   const two = (LearnerSubmissions[1].submission.score) / (AssignmentGroup.assignments[1].points_possible);

//   console.log("id:" + learner125, "avg:" + avg, "1:" + one, "2:" + two)

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// // console.log(result);

// const learner132 = LearnerSubmissions[3].learner_id;
//   const avg2 = (LearnerSubmissions[3].submission.score + LearnerSubmissions[4].submission.score) / (AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible); 
//   const one2 = (LearnerSubmissions[3].submission.score) / (AssignmentGroup.assignments[0].points_possible);
//   let latePenalty;
//   let percentage;
//   let submissionDate= new Date(LearnerSubmissions[4].submission.submitted_at);
//   let dueDate=new Date (AssignmentGroup.assignments[1].due_at);
//   let todayDate= new Date();
//   if(submissionDate >dueDate){
//     percentage= AssignmentGroup.assignments[1].points_possible *0.10;
//     latePenalty=LearnerSubmissions[4].submission.score -percentage;
//   }
//   // let two2 = (LearnerSubmissions[4].submission.score) / (AssignmentGroup.assignments[1].points_possible);
//   let two2 = ((latePenalty) / (AssignmentGroup.assignments[1].points_possible)).toFixed(3);
//   console.log("id:" + learner132, "avg:" + avg2, "1:" + one2, "2:" + two2)

//   let submissions = LearnerSubmissions;
//   for( let i=0, len=submissions.length; i<len; i++){
//     console.log(submissions[i]);

// let totalPointsPossible = 0;
//   dueAssignments.forEach(assignment => {
//       totalPointsPossible += assignment.points_possible;
//   });
  

//   }

//   function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions){
//     const learnerArray = []; //STORE ANSWER
   
//     let submissions = LearnerSubmissions;
//   for( let i = 0, len=submissions.length; i<len; i++){
//     const innerArray = submissions[i];

//     for (let n = 0; n < innerArray.length; n++) {
//       const obj = innerArray[n];
      

//       if(obj.learner_id === "125" || obj.learner_id === "132") {
//         learnerArray.push(obj);
//         console.log(learnerArray);
//       }


//     }
     

//   }
//   return learnerArray;
// }
// const learnerArray = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
// console.log(learnerArray);

// let studentsId =[]
    



//     let unique_studentsId = [...new Set(studentsId)];   // remove duplicates Ids
//     console.log(unique_studentsId);
  
//   const learnerId = LearnerSubmissions[0].learner_id;
// const assignment1 = AssignmentGroup.assignments[0];
// const assignment2 = AssignmentGroup.assignments[1];

// const score1 = LearnerSubmissions[0].submission.score;
// const score2 = LearnerSubmissions[1].submission.score;

// const totalPoints1 = assignment1.points_possible;
// const totalPoints2 = assignment2.points_possible;

// const avg = (score1 + score2) / (totalPoints1 + totalPoints2);
// const percentage1 = score1 / totalPoints1;
// const percentage2 = score2 / totalPoints2;



//// cleaner /////
const score1 = LearnerSubmissions[0].submission.score;
const score2 = LearnerSubmissions[1].submission.score;

const totalPoints1 = assignment1.points_possible;
const totalPoints2 = assignment2.points_possible;

const avg = (score1 + score2) / (totalPoints1 + totalPoints2);
const percentage1 = score1 / totalPoints1;
const percentage2 = score2 / totalPoints2;