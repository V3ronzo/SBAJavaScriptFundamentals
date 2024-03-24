// The provided course information.
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

// /
const getLearnerData = (courseInfo, assignmentGroup, learnerSubmissions) => {
    // Defining a function to calculate the score for a learner
    const calculateScoreForLearner = (learnerId) => {
      let totalScore = 0;
      let totalPossibleScore = 0;
      const learnerScores = {};
  
      for (const assignment of assignmentGroup.assignments) {
        const submission = learnerSubmissions.find(
          (submission) =>
            submission.learner_id === learnerId &&
            submission.assignment_id === assignment.id
        );
  
        if (submission) {
          totalScore += submission.submission.score;
          totalPossibleScore += assignment.points_possible;
          learnerScores[assignment.id] = submission.submission.score / assignment.points_possible;
        } else {
          totalPossibleScore += assignment.points_possible;
        }
      }
  
      const avgScore = totalScore / totalPossibleScore;
      return { id: learnerId, avg: avgScore, ...learnerScores };
    };
  
    // Extracting unique learner IDs
    const learnerIds = [
      ...new Set(learnerSubmissions.map((submission) => submission.learner_id)),
    ];
  
    // Calculating scores for each learner
    let learnerScores = [];
    try {
      learnerScores = learnerIds.map((learnerId) =>
        calculateScoreForLearner(learnerId)
      );
    } catch (error) {
      console.error('Error calculating learner scores:', error);
    }
  
    return learnerScores;
  };
  
  // Example usage
//   const CourseInfo = { id: 451, name: 'Introduction to JavaScript' };
//   const AssignmentGroup = {
//     id: 12345,
//     name: 'Fundamentals of JavaScript',
//     course_id: 451,
//     group_weight: 25,
//     assignments: [
//       { id: 1, name: 'Declare a Variable', due_at: '2023-01-25', points_possible: 50 },
//       { id: 2, name: 'Write a Function', due_at: '2023-02-27', points_possible: 150 },
//       { id: 3, name: 'Code the World', due_at: '3156-11-15', points_possible: 500 },
//     ],
//   };
//   const LearnerSubmissions = [
//     { learner_id: 125, assignment_id: 1, submission: { submitted_at: '2023-01-25', score: 47 } },
//     { learner_id: 125, assignment_id: 2, submission: { submitted_at: '2023-02-12', score: 150 } },
//     { learner_id: 125, assignment_id: 3, submission: { submitted_at: '2023-01-25', score: 400 } },
//     { learner_id: 132, assignment_id: 1, submission: { submitted_at: '2023-01-24', score: 39 } },
//     { learner_id: 132, assignment_id: 2, submission: { submitted_at: '2023-03-07', score: 140 } },
//   ];
  
  const learnerData = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(learnerData);