import { EnumValues } from "zod";

export const JOBTYPES: EnumValues = [
  "Full-Time",
  "Part-Time",
  "Remote",
  "Internship",
];

export const JOB_LISTING_COLUMNS: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicants",
  "Needs",
];

export const JOB_APPLICANT_COLUMNS: string[] = ["name", "Applied Date"];

export interface JobApplicantDataType {
  name: string;
  appliedDate: string;
}

export const JOB_APPLICANT_DATA: JobApplicantDataType[] = [
  {
    name: "Hariyanto",
    appliedDate: "15 Aug 2023",
  },
];

export interface JobListingDataType {
  roles: string;
  status: string;
  datePosted: string;
  dueDate: string;
  jobType: string;
  applicants: string;
  needs: string;
}

export const JOB_LISTING_DATA: JobListingDataType[] = [
  {
    roles: "Software Engineer",
    status: "Live",
    datePosted: "12 Aug 2023",
    dueDate: "12 Sep 2023",
    jobType: "Full-Time",
    applicants: "1",
    needs: "10",
  },
];
