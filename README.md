# OSS Inspector

[OSSInspector](https://github.com/Illusion0-0/OSSInspector) rates GitHub repositories upon data received from GitHub API. You can use this tool to find out which repo is safe to be used in your project or not. You can also use it to check how you can improve your repositories to make it more trustworthy to gain higher reach.

## Features

- **Search GitHub Repository** - Search for GitHub repo, gather scoring about their owner profile and repo security health rating
- **Overall Score** - Get an overall score based on other scores
- **Section specific scores** - Such as User Popularity, Biography, Repository Description rating and more

## Profile-Score

The following conditions are used in the calculations:

- Total Stars
- Total Forks
- Total Followers
- Repository Count
- Repository Descriptions
- User Biography
- User Information (Email, Company, Location, Webpage)

## About

Open Source Software (OSS) Security Inspector :
Open source software is an integral part of every tech product. There are amazing contributors who actively maintain their repositories. However, every coin has two sides. All OSS repositories may not be maintained properly, because of which, vulnerabilities may get introduced with time. Whereas, some OSS repos could be created by attackers themselves to trick the users. We need an OSS inspector to solve this problem. This tool will help us to identify the genuineness of the repos and perform a security health check. It uses [GitHub API](https://docs.github.com/en/rest) to gather data about the repo and the owner and with our own algorithm it rates the data then displays the result to user.

## Development

Clone and install.

```bash
git clone https://github.com/Illusion0-0/OSSInspector.git
cd oss-inspector
npm i
```

Run a development server.

```bash
npm start
```

## Author

- [Illusion0-0](https://github.com/Illusion0-0)

## License

This project is open source and available under the [MIT License](LICENSE).
