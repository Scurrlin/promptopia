import Link from "next/link";

// Utility function to handle proper verb forms
const getGerundForm = (type) => {
  const Gerunds = {
    Create: "Creating",
    Delete: "Deleting",
    Update: "Updating",
  };
  return Gerunds[type] || `${type}ing`;
};

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      {/* Form Header */}
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share your favorite prompts to help others level up their AI game!
      </p>

      {/* Form Content */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        {/* AI Prompt Field */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="form_textarea"
          />
        </label>

        {/* Prompt Tag Field */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Prompt Field{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #writing, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>

        {/* Form Actions */}
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${getGerundForm(type)}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
