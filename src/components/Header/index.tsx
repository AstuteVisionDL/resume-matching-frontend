import {DropdownMenu, Button, Icon} from '@gravity-ui/uikit';
import {Sun} from '@gravity-ui/icons';

interface HeaderProps {
    setTheme: (value: string) => void
}

function Header(props: HeaderProps) {
    const { setTheme } = props;
    const setThemeWithSaving = (theme: string) => {
        localStorage.setItem("theme", theme);
        setTheme(theme);
    }

    return (
        <div className="yc-row">
            <div className="yc-col_s-xl_11 yc-col_s-s_10">
            </div>
            <div className="yc-col_s-xl_1 yc-col_s-s_2 yc-s__p_3">
                <DropdownMenu
                    switcher={
                        <Button view="flat">
                            <Icon size={24} data={Sun} />
                        </Button>
                    }
                    items={[
                        {
                            action: () => setThemeWithSaving('light'),
                            text: 'Светлая',
                        },
                        {
                            action: () => setThemeWithSaving('dark'),
                            text: 'Темная',
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default Header;