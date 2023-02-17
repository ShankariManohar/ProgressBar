import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

let defaultProgressBarValue
let increaseCountBy25
let increaseCountBy10
let decreaseCountBy25
let decreaseCountBy10

// beforeEach(() => {
//   render(<App />)
//   defaultProgressBarValue = screen.findByRole("option",{value:"#progressBar1"})
//   increaseCountBy25 = screen.getByRole('button', { name: '+25' })
//   increaseCountBy10 = screen.getByRole('button', { name: '+10' })
//   decreaseCountBy25 = screen.getByRole('button', { name: '-25' })
//   decreaseCountBy10 = screen.getByRole('button', { name: '-10' })
// })


test('renders App page', async() => {
  render(<App />);
  expect(await screen.findByRole("option", { name: "#progressBar1"})).toBeInTheDocument();
});

test("should be load the the button", async () => {
  render(<App />);
   //Initiate the button click
   const incrementBtn = screen.getByRole("button", { name: "+25" });
   expect(incrementBtn).not.toBeDisabled();
   userEvent.click(incrementBtn);
});

test("should increase the progress bar percentage by 25", async() => {
  const {container} = render(<App />);
  const incrementBtn = screen.getByRole("button", { name: "+25" });
  userEvent.click(incrementBtn);
  expect(screen.getByText(/50%/i)).toBeInTheDocument();
});

test("should decrease the progress bar percentage by 25", async() => {
  const {container} = render(<App />);
  const decreaseBtn = screen.getByRole("button", { name: "-25" });
  userEvent.click(decreaseBtn);
  expect(screen.getByText(/0%/i)).toBeInTheDocument();
})