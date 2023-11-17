export function getMockFilesPath(pathsString: string):string[]{
    if (pathsString === "" || typeof pathsString !== "string") {
        return [];
    }
    const paths = pathsString.split(",")?.map((path) => path.trim()) || [];
    const bracketRegex = /\[([^[\]]+)]/g;
    const starEndRegex = /\/\*$/;
    const result: string[] = [];

    paths.forEach((pathString) => {
        const matches = bracketRegex.test(pathString)
            ? (pathString.match(bracketRegex) || []).flatMap((match) =>
                match
                    .slice(1, -1)
                    .split("|")
                    .map((value) => pathString.replace(match, value.trim()))
            )
            : [];

        matches.forEach((match) => {
            const finalMatch = starEndRegex.test(match)
                ? match.replace(starEndRegex, "/*")
                : match;
            result.push(finalMatch);
        });

        if (!matches.length) {
            result.push(pathString.replace(starEndRegex, "/*"));
        }
    });

    return result;
}

export function filterPaths(allPathArr: string[], filePath: string[]) {
    const regexPatterns = filePath.map((pattern) =>
        new RegExp(`^${pattern.replace(/\*/g, '.*')}\\.(ts|js)$`)
    );

    return allPathArr.filter((path) =>
        regexPatterns.some((regex) => regex.test(path))
    );
}