<h1 align="left">
    <a">Back-end - SaaS</a>
</h1>

> Project status: Completed :heavy_check_mark:
                                  
# :pushpin: Table of Contents

* [Running Locally](#construction_worker-running-locally)
* [FAQ](#postbox-faq)
* [Issues](#bug-issues)
* [Contributing](#tada-contributing)

## :construction_worker: Running Locally

The BACK-END of a Saas application (software as a service) - payment system (Subscription Management).

#### Clone repository
```bash
git clone https://github.com/Icegreeen/my-blog.git
```

#### Define environment variables
```bash
cp .env.local.example .env.local

PUBLISHABLEKEY=STRIPE
SECRETKEY=STRIPE
PRO_PRICE_ID=STRIPE
WEBHOOKSECRET=STRIPE
```

#### Install dependencies & execute web application in development mode
```bash
bun install
bun dev 
```

#### Run webhook:

```bash
stripe listen --forward-to localhost:3000/stripe
```

#### View model interface:

```bash
bun prisma studio
```

Define the environment variables by creating a .env.local file similar to [.env.local.example](https://github.com/Icegreeen/Saas-system)

# :postbox: Faq

**Question:** What are the technologies used in this project?

**Answer:** [Next.js](https://nextjs.org/), [Tailwind](), [Shadcn/ui]() and [Prisma]()

# :bug: Issues

Feel free to **file a new issue** with a respective title and description. If you already found a solution to your problem, **I would love to review your pull request**!

# :tada: Contributing

Check out the [contributing](https://github.com/Icegreeen/my-blog/blob/main/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing
