export function WorkExperience({
  company,
  website,
  title,
  start,
  end,
  responsibilities,
}: {
  company: string
  website?: string
  title: string
  start: string
  end: string
  responsibilities: string[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <h4 className="font-semibold">
            {website ? (
              <a href={website} target="_blank" className="text-primary hover:underline" rel="noreferrer">
                {company}
              </a>
            ) : (
              company
            )}
          </h4>
          <p className="mb-0">{title}</p>
        </div>
        <div className="text-right text-gray-9">
          {start} - {end}
        </div>
      </div>
      <div>
        <div>Main responsibilities:</div>
        <ul className="mb-0 ml-2">
          {responsibilities.map((responsibility) => (
            <li key={responsibility} className="pl-1" style={{ listStyleType: '"-"' }}>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
