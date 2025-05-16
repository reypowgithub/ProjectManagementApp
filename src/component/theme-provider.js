import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setThemeState] = useState('system');
    const {setColorScheme} = useColorScheme();

    useEffect(() =>{
        const setInitialTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem('theme');
                const initialTheme = savedTheme || 'system';
                setThemeState(initialTheme);

                if (initialTheme === 'system') {
                    const currentTheme = Appearance.getColorScheme();
                    console.log("Initial system theme:", currentTheme);
                    setColorScheme(currentTheme || 'light');
                } else {
                    setColorScheme(initialTheme);
                }
            }
            catch (e) {
                console.error('Error setting initial theme:', e);
                const currentTheme = Appearance.getColorScheme();
                setColorScheme(currentTheme || 'light');
            }
        };

        setInitialTheme();
    }, []);

    const setTheme = async (newTheme) => {
        try{
            await AsyncStorage.setItem('theme', newTheme);
            setThemeState(newTheme);
            if (newTheme === 'system') {
                const currentTheme = Appearance.getColorScheme();
                setColorScheme(currentTheme || 'light');
            } else {
                setColorScheme(newTheme);
            }
        }
        catch (e) {
            console.error('Error setting theme:', e);
        }
    };

    useEffect (() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            console.log("Theme changed to:", colorScheme);
            if (theme === 'system') {
                setColorScheme(colorScheme);
            }
        });

        return () => subscription.remove();
    }, [theme]);

    return (<ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>);
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}