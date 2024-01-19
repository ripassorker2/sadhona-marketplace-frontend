import Container from "@/utils/Container";
import AllJobs from "../pages/Jobs/AllJobs/AllJobs";

const JobPage = () => {
    return (
        <Container>
            <div className="">
                <AllJobs query={""} />
            </div>
        </Container>
    );
};

export default JobPage;
