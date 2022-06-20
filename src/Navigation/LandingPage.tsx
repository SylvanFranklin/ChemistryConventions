import DefaultLayout from "../Page Layouts/Default";

const Landing: React.FC = () => {
  return (
    <DefaultLayout title="About the project">
      <div className="text-standard bg-standard mx-auto w-1/2 rounded-lg p-4 text-center text-lg">
        Under Development. See {" "}
        <a className="text-blue-400" href="https://github.com/SylvanFranklin/ChemistryConventions">
          Github
        </a>
        {" "}
        for more information
      </div>
    </DefaultLayout>
  );
};

export default Landing;
