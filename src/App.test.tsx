import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('checking whether input is visible in the first run', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText('Search for Artists');
  expect(linkElement).toBeInTheDocument();
});

test("checking whether 'your library' text is visible in the first run", () => {
  render(<App />);
  const linkElement = screen.getByText('Your Library');
  expect(linkElement).toBeInTheDocument();
});

test("checking whether 'Discover Album' text is visible in the first run", () => {
  render(<App />);
  const linkElement = screen.getByText('Discover Album');
  expect(linkElement).toBeInTheDocument();
});

test("checking whether 'Let's Play' text is visible in the first run", () => {
  render(<App />);
  const linkElement = screen.getByText("Let's Play");
  expect(linkElement).toBeInTheDocument();
});
