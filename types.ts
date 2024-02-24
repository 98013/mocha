// Generated by https://quicktype.io

/**
 * create a file
 * copy json from some random site
 * ctrl+shift+p - select paste JSON as type
 * enter response and click enter.
 */

export interface Response {
    employees: Employee[];
}

export interface Employee {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    phoneNumbers: PhoneNumber[];
}

export interface Address {
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
}

export interface PhoneNumber {
    type: string;
    number: string;
}