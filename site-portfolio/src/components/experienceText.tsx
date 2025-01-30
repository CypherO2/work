export interface experienceProps {
  dateStart: string;
  dateEnd: string;
  jobRole: string;
  workPlace: string;
  roleDesc: string;
}

export default function ExperienceText({
  dateStart,
  dateEnd,
  jobRole,
  workPlace,
  roleDesc,
}: experienceProps) {
  return (
    <>
      <div className="py-1">
        <span className="text-secondary">
          {dateStart} - {dateEnd}
        </span>
        <h4 className="fw-bold">
          {jobRole} - {workPlace}
        </h4>
        <h6 className="mx-3">{roleDesc}</h6>
      </div>
    </>
  );
}
