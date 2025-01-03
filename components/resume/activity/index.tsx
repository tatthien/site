export function Activity({
  org,
  website,
  title,
  start,
  end,
  responsibilities,
}: {
  org: string
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
                {org}
              </a>
            ) : (
              org
            )}
          </h4>
          <p className="mb-0">{title}</p>
        </div>
        <div className="text-right text-gray-9">
          {start} - {end}
        </div>
      </div>
      <div>
        <ul className="mb-0 list-none">
          {responsibilities.map((responsibility) => (
            <li key={responsibility} className="list-none">
              - {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
