import School from "../models/schoolModels.js"

export const getAllSchools = async () => {
    const schools = School.find({})
    if (schools) {
        return schools
    } else {
        throw new Error("Schools not found")
    }
}

export const getASchool = async (parent, args) => {
    const school = School.findById(args._id)

    if (school) {
        return school
    } else {
        throw new Error("School not found")
    }
}

export const createSchool = async (parent, args) => {
    const { schoolCode, schoolName } = args
    const school = new School({
        schoolCode,
        schoolName
    })
    const createdSchool = await school.save()
    return createdSchool
}