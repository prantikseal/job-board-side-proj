import React from 'react';
import { Grid, Container } from '@mui/material';
import JobCard from './JobCard';
import FilterSection from './FilterSection';

interface Job {
    jdUid: string;
    jdLink: string;
    jobDetailsFromCompany: string;
    maxJdSalary: number;
    minJdSalary: number;
    salaryCurrencyCode: string;
    location: string;
    minExp: number;
    maxExp: number;
    jobRole: string;
    companyName: string;
    logoUrl: string;
}

interface JobCardSectionProps {
  jobs: Job[];
}

const JobCardSection: React.FC<JobCardSectionProps> = ({ jobs }) => {
  return (
    <Container style={
      {
        marginTop: '20px'
      }
    } maxWidth='lg'
    >
      <FilterSection />
      <Grid container spacing={4}>
        {jobs.map((job) => (
          <Grid item key={job.jdUid} xs={12} sm={6} md={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobCardSection;
