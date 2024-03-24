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

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  try {
      // Validate if the AssignmentGroup belongs to the CourseInfo
      if (AssignmentGroup.course_id !== CourseInfo.id) {
          throw new Error("Invalid input: Assignment group does not belong to the course.");
      }

      // Calculate weighted average for each learner
      function calculateWeightedAverage(assignments, learnerId) {
          let totalWeightedScore = 0;
          let totalPossiblePoints = 0;

          for (const assignment of assignments) {
              const submission = LearnerSubmissions.find(sub => sub.assignment_id === assignment.id && sub.learner_id === learnerId);
              if (submission) {
                  const lateSubmission = new Date(submission.submission.submitted_at) > new Date(assignment.due_at);
                  if (lateSubmission) {
                      continue; // Skip calculation for late submissions
                  }
                  const score = submission.submission.score;
                  const pointsPossible = assignment.points_possible;
                  if (pointsPossible === 0) {
                      throw new Error(`Invalid data: points_possible for assignment ${assignment.id} is 0.`);
                  }
                  const scorePercentage = score / pointsPossible;
                  totalWeightedScore += scorePercentage * (assignment.group_weight || 1);
                  totalPossiblePoints += (assignment.group_weight || 1);
              }
          }

          // Handle case when totalPossiblePoints is zero
          if (totalPossiblePoints === 0) {
              return 0;
          }

          return (totalWeightedScore / totalPossiblePoints) * 100;
      }

      // Process each learner's data
      const result = LearnerSubmissions.reduce((acc, submission) => {
          const learnerId = submission.learner_id;
          const avg = calculateWeightedAverage(AssignmentGroup.assignments, learnerId);

          // Calculate percentage score for each assignment
          const assignmentScores = AssignmentGroup.assignments.reduce((scores, assignment) => {
              const submission = LearnerSubmissions.find(sub => sub.assignment_id === assignment.id && sub.learner_id === learnerId);
              if (submission) {
                  const lateSubmission = new Date(submission.submission.submitted_at) > new Date(assignment.due_at);
                  if (lateSubmission) {
                      return scores; // Skip adding late submissions to the scores
                  }
                  const score = submission.submission.score;
                  const scorePercentage = score / assignment.points_possible;
                  scores[assignment.id] = scorePercentage;
              }
              return scores;
          }, {});

          // Add learner's data to the result using push.. !!!
          acc.push({
              id: learnerId,
              avg,
              ...assignmentScores
          });

          return acc;
      }, []);

      return result;
  } catch (error) {
      return { error: error.message };
  }
}
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);

// [
//   { '1': 0.94, '2': 1, '3': 0.8, id: 125, avg: 91.33333333333334 },
//   { '1': 0.94, '2': 1, '3': 0.8, id: 125, avg: 91.33333333333334 },
//   { '1': 0.94, '2': 1, '3': 0.8, id: 125, avg: 91.33333333333334 },
//   { '1': 0.78, id: 132, avg: 78 },
//   { '1': 0.78, id: 132, avg: 78 }
// ]

// yes it's a result .. but.. not an array with two object.. ''wooosaaahh'''' 

                  
                  



