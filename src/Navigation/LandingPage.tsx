import DefaultLayout from "../Page Layouts/Default";

const Landing: React.FC = () => {
  return (
    <DefaultLayout title="About the project">
      <p className="text-standard bg-standard mx-auto w-1/2 rounded-lg p-4 text-lg">
        "Chemistry Conventions" is a website designed for practicing the many
        naming and formula conventions of chemistry. All questions are
        algorithmically generated, which means there's an endless supply.
        <p className="mt-10">
          *Currently under development, so you're likely to encounter a few bugs
          and missing features.
        </p>
      </p>

      <p className="text-standard bg-standard mx-auto mt-10 w-1/2 rounded-lg p-4 text-lg">
        For anyone looking to contribute the site is on {""}
        <a
          href="https://github.com/SylvanFranklin/ChemistryConventions"
          className="text-blue-200 underline"
        >
          GitHub
        </a>
        {""} with installation instructions.
      </p>
    </DefaultLayout>
  );
};

export default Landing;
