import type { Theme } from '../App'

type HeaderProps = {
    theme: Theme,
    onToggleTheme: () => void,
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {

    return (
        <header>
            <h2>Task tracker</h2>
            <label>
                <button
                    type="button"
                    onClick={onToggleTheme}
                >{theme}</button>
            </label>
        </header>
    )
}
