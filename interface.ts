// Generated by https://quicktype.io
/**
 * copy json
 * paste a type
 * write response and enter.
 *
 */

export interface Response {
    university: University;
}

export interface University {
    name: string;
    departments: Department[];
}

export interface Department {
    name: string;
    courses: Course[];
}

export interface Course {
    name: string;
    professor: Professor;
    students: Student[];
}

export interface Professor {
    firstName: string;
    lastName: string;
    publications: Publication[];
}

export interface Publication {
    title: string;
    year: number;
}

export interface Student {
    firstName: string;
    lastName: string;
    year: string;
    grades: Grades;
}

export interface Grades {
    midterm: number;
    final: number;
}
