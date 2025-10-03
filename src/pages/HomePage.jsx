import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"


function HomePage() {
  return (
    <>
        <Hero title="Test title" subtitle="Find the best match" />
        <HomeCards />
        <JobListings> 
        </JobListings>
        <ViewAllJobs />
    </>
  )
}

export default HomePage