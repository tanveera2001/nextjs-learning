
export default async function ProjectDetails({
    params,
}: {
    params: Promise<{projectId: string, sectionId: string, chapterId: string}>;
}) {
    const {projectId, sectionId, chapterId} = await params;
    return(
        <>
            <h1>Project {projectId} Section {sectionId} Chapter {chapterId}</h1>
        </>
    );
};