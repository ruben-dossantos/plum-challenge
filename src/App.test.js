import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./layout/Header', () => () => <header>Header Component</header>);
jest.mock('./layout/TopNavigation', () => () => <nav>TopNavigation Component</nav>);
jest.mock('./layout/Content', () => () => <main>Content Component</main>);

test('<App />', () => {
    render(<App />);
    const headerComponent = screen.getByText('Header Component');
    const topNavigationComponent = screen.getByText('TopNavigation Component');
    const contentComponent = screen.getByText('Content Component');

    expect(headerComponent).toBeInTheDocument();
    expect(topNavigationComponent).toBeInTheDocument();
    expect(contentComponent).toBeInTheDocument();
});