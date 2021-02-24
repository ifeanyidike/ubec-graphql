import { getAllAssessments, getAnAssessment, createAssessment, addQuestions, getAssessmentBySubject } from "./questionResolvers.js"
import { createSubject, getAllSubjects, getASubject, getSubjectByName } from "./subjectResolvers.js";
import { createSchool, getAllSchools, getASchool } from "./schoolResolvers.js";
import { createStudent, getAllStudents, getAStudent, updateStudent } from "./studentResolvers.js";
import { createTeacher, getAllTeachers, getATeacher, updateTeacher } from "./teacherResolvers.js";
import { studentsLogin, teachersLogin } from "./authResolvers.js";

export const root = {
    Query: {
        assessments: getAllAssessments,
        assessment: getAnAssessment,
        assessmentBySubject: getAssessmentBySubject,
        subjects: getAllSubjects,
        subject: getASubject,
        subjectByName: getSubjectByName,
        schools: getAllSchools,
        school: getASchool,
        students: getAllStudents,
        student: getAStudent,
        teachers: getAllTeachers,
        teacher: getATeacher,
        studentsLogin,
        teachersLogin,
    },
    Mutation: {
        createSubject,
        createAssessment,
        addQuestions,
        createSchool,
        createStudent,
        updateStudent,
        createTeacher,
        updateTeacher,
    }
}