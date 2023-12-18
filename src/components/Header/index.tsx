import {DropdownMenu, Button, Icon, Col, Row} from '@gravity-ui/uikit';
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
        <Row space={1} style={{marginTop: "16px"}}>
            <Col xl={11} s={10}>
            </Col>
            <Col xl={1} s={2}>
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
            </Col>
        </Row>
    );
}

export default Header;