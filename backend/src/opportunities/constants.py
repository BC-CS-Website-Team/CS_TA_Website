from enum import Enum

class OpportunityType(str, Enum):
    INTERNSHIP = "internship"
    JOB = "job"
    PROJECT = "project"
    HACKATHON = "hackathon"
    RESEARCH = "research"
    OTHER = "other"
