import MyImage from "../assets/my-image.jpg"

export function Banner() {
  return (
    <div className="flex flex-col gap-6 mt-12">
      <div className="flex items-center gap-6">
        <div className="w-48 shrink-0">
          <img
            src={MyImage}
            alt="Margo Kulakovich"
            className="rounded-full shadow-xl border border-pink"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-5xl">Margo Kulakovich</h1>
          <h2 className="text-3xl text-gray font-medium">Front-End Engineer</h2>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <p>
          Hey! I am a goal-oriented and eager-to-learn frontend development
          specialist. I have a basic knowledge of HTML, CSS, and JavaScript, as
          well as experience with libraries such as React. I possess analytical
          thinking and attention to detail, which allows me to create intuitive
          and user-friendly interfaces.
        </p>
      </div>
    </div>
  )
}
