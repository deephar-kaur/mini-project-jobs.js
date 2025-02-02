const jobs = [];

function addJob(title, type, description, location, salary, companyName, companyDescription, contactEmail, contactPhone) {
  const job = {
    id: jobs.length + 1,
    title,
    type,
    description,
    location,
    salary,
    company: {
      name: companyName,
      description: companyDescription,
      contactEmail,
      contactPhone
    },
    datePosted: new Date().toISOString()
  };
  jobs.push(job);
  return job;
}

function getJobs() {
  return jobs;
}

function removeJob(id) {
  const index = jobs.findIndex(job => job.id === id);
  if (index !== -1) {
    jobs.splice(index, 1);
    return true;
  }
  return false;
}

function updateJob(id, updatedFields) {
  const job = jobs.find(job => job.id === id);
  if (job) {
    Object.assign(job, updatedFields);
    return job;
  }
  return null;
}

function deleteJob(id) {
  return removeJob(id); // The delete functionality is the same as remove in this case.
}

// Example usage:

// Add a job
const newJob = addJob(
  "Senior React Developer", 
  "Full-Time", 
  "We are seeking a talented Front-End Developer...", 
  "Boston, MA", 
  "$70K - $80K", 
  "NewTek Solutions", 
  "NewTek Solutions is a leading technology company...", 
  "contact@teksolutions.com", 
  "987 654 3210"
);

console.log("After adding job:", getJobs());

// Update the job (e.g., change salary)
updateJob(newJob.id, { salary: "$80K - $90K", title: "Lead React Developer" });
console.log("After updating job:", getJobs());

// Remove the job
removeJob(newJob.id);
console.log("After removing job:", getJobs());

// Delete the job (same as remove in this case)
deleteJob(newJob.id); 
console.log("After deleting job:", getJobs());
