import { Typewriter } from "react-simple-typewriter";
import { render, screen } from "@testing-library/react";
import LandingContent from "./LandingContent";
import "@testing-library/jest-dom/extend-expect";

test("renders LandingContent component correctly", () => {
  render(<LandingContent />);
  render(
    <Typewriter
      words={["Front-end", "Developer", "React.js", "Developer"]}
      loop={false}
      cursor
    />
  );
  // Check if the component renders without errors
  expect(screen.getByText("Hello, my name is")).toBeInTheDocument();
  expect(screen.getByText("Mohamed Fahmy")).toBeInTheDocument();
  expect(screen.getByText("And I'm a")).toBeInTheDocument();

  // Check if the "Download CV" button is present
  const downloadButton = screen.getByText("Download CV");
  expect(downloadButton).toBeInTheDocument();

  // Check if the button has the correct attributes
  expect(downloadButton.tagName).toBe("BUTTON");

  const downloadLink = screen.getByRole("link", { name: "Download CV" });
  expect(downloadLink).toHaveAttribute(
    "href",
    expect.stringContaining("mohamedfahmy.pdf")
  );
  expect(downloadLink).toHaveAttribute("target", "_blank");
  expect(downloadLink).toHaveAttribute("rel", "noreferrer");
  expect(downloadLink).toHaveAttribute("download");

  // Check if the button has the expected number of spans using screen.getAllByRole
  const buttonSpans = screen.getAllByText("", { selector: ".presentation" });
  expect(buttonSpans.length).toBe(4);
});
