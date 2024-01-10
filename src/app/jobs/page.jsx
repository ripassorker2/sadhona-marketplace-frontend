import Container from "@/utils/Container";
import AllJobs from "../pages/Jobs/AllJobs/AllJobs";
import Link from "next/link";

const JobPage = () => {
    return (
        <Container>
            <div className="">
                <div className="flex justify-end items-end mb-6">
                    <Link href={"/postjob"} className="btn-primary">
                        Post a job
                    </Link>
                </div>
                <AllJobs />
            </div>
        </Container>
    );
};

export default JobPage;
