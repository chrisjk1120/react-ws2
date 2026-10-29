import filtering from "./filtering.tsx";
import Filtering from "./filtering.tsx";
function MainSection()
{
  return(
    <main className={"mx-auto max-w-7xl lg:sticky lg:top-20 self-start"}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <Filtering />
        <Products />
      </div>
    </main>
);
}

export default MainSection;
