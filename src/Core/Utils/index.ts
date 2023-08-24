type TClassnamesProp = Record<string, string | boolean>;

export class Utils {
    /** Утилита для динамической генерации классов */
    static classnames(props: TClassnamesProp | Array<string | TClassnamesProp>): string {
        function entriesToString(obj: TClassnamesProp): string {
            return Object.entries(obj).reduce<string>(
                (acc, [key, value]) => (value ? `${key} ${acc}` : acc).trim(),
                ''
            );
        }

        if (!Array.isArray(props)) {
            return entriesToString(props);
        }

        return props.reduce<string>((acc, item) => {
            const className: string = typeof item === 'string' ? item : entriesToString(item);
            return (className ? `${className} ${acc}` : acc).trim();
        }, '');
    }

    static delay(time = 500) {
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        });
    }
}
