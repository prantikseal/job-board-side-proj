import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box, Button, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BoltIcon from '@mui/icons-material/Bolt';

interface Job {
    jdUid: string;
    jdLink: string;
    jobDetailsFromCompany: string;
    maxJdSalary: number;
    minJdSalary: null;
    salaryCurrencyCode: string;
    location: string;
    minExp: number;
    maxExp: number;
    jobRole: string;
    companyName: string;
    logoUrl: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card>
      <Box display="flex" alignItems="center" p={2}>
        <AccessTimeIcon fontSize="small" />
        <Typography variant="body2" color="textSecondary" ml={1}>
          Posted 10 days ago
        </Typography>
      </Box>
      <CardMedia
        component="img"
        height="60"
        image={job.logoUrl}
        alt={`${job.companyName} logo`}
        sx={{ objectFit: 'contain', mt: 1 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {job.companyName}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          {job.jobRole}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {job.location}
        </Typography>
        <Typography variant="body2" color="textSecondary" mt={2}>
          Estimated Salary: {job.minJdSalary ? `${job.minJdSalary} -` : ''} {job.maxJdSalary} {job.salaryCurrencyCode}
        </Typography>
        <Typography variant="body2" mt={2}>
          About Company:
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          {job.jobDetailsFromCompany}
        </Typography>
        <Button variant="contained" color="primary" href={job.jdLink} target="_blank">
          View job
        </Button>
        <Typography variant="body2" color="textSecondary" mt={2}>
          Minimum Experience: {job.minExp ?? 'N/A'} years
        </Typography>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Chip icon={<BoltIcon />} label="Easy Apply" color="success" />
          <Button variant="outlined" color="primary">
            Unlock referral asks
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
