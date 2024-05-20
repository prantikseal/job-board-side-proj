import React from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

const FilterSection = () => {
  return (
    <Box display="flex" justifyContent="space-between" mb={4}>
    <TextField select label="Roles" variant="outlined" style={{ minWidth: 150 }}>
      <MenuItem value="all">All Roles</MenuItem>
      <MenuItem value="frontend">Frontend</MenuItem>
      <MenuItem value="backend">Backend</MenuItem>
    </TextField>
    <TextField select label="Number Of Employees" variant="outlined" style={{ minWidth: 150 }}>
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="1-10">1-10</MenuItem>
      <MenuItem value="11-50">11-50</MenuItem>
    </TextField>
    <TextField select label="Experience" variant="outlined" style={{ minWidth: 150 }}>
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="0-2">0-2 years</MenuItem>
      <MenuItem value="3-5">3-5 years</MenuItem>
    </TextField>
    <TextField select label="Remote" variant="outlined" style={{ minWidth: 150 }}>
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="yes">Yes</MenuItem>
      <MenuItem value="no">No</MenuItem>
    </TextField>
    <TextField select label="Minimum Base Pay Salary" variant="outlined" style={{ minWidth: 150 }}>
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="50k">50k</MenuItem>
      <MenuItem value="100k">100k</MenuItem>
    </TextField>
    <TextField label="Search Company Name" variant="outlined" style={{ minWidth: 200 }} />
  </Box>
  )
}

export default FilterSection