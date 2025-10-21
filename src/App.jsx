import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import React from 'react'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

const App = () => {

  const addJob = async (newJob) => {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });

    if (!response.ok) {
      console.error('Failed to add job');
    } else {
      const data = await response.json();
      console.log('Job successfully added:', data);
    }
  }

  const deleteJob = async (jobId) => {
    const response = await fetch(`/api/jobs/${jobId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('Failed to delete job');
    } else {
      console.log('Job successfully deleted');
    }
  }

  const updateJob = async (job) => {
    const response = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });

    if (!response.ok) {
      console.error('Failed to edit job');
    } else {
      const data = await response.json();
      console.log('Job successfully edited:', data);
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );


  return <RouterProvider router={router} />

}

export default App