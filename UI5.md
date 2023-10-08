
# Svelte in Workzone and Launchpad Integration

Devtoberfest this year has been really interesting, with a variety of engaging topics. One of the sessions that caught my attention was Michelle Moudy's talk on "Using UI5 Web Components with Svelte" I was pleasantly surprised to find content related to Svelte.
It spurred me to develop a solution for those who want to use Svelte but are hesitant about launchpad or workzone integration.

You may already know that you can use any UI library you want with SAP BTP for development. The CAP team, for instance, prefers Vue if you can"t use Fiori Elements.
There are also ways to serve applications developed with other UI Frameworks in SAP NetWeaver . However, seamless integration with Fiori Launchpad or SAP Workzone can pose challenges.

This is where this approach comes in handy. It ensures that your non-UI5 application behaves like a standard UI5 app when the local language and theme in a launchpad change. It achieves this by using basic UI5 App as a host, loading the minimum UI5 necessities, and then rendering hosted app. While I prepared POC code for Svelte, this approach can also be applied to Vue, React, and other frameworks.

## A Closer Look at Svelte: 
Svelte is unique because it operates differently from other UI frameworks like React, Vue, etc.. Instead of doing most of its work in the browser at runtime, Svelte moves that work into a compile step that occurs when you build your app. This results in pure JavaScript code that manipulates the DOM directly. On the other hand, React maintains a copy of the DOM (virtual DOM) and manipulates this VDOM at runtime, finding differences between the VDOM and the DOM, and updating the DOM accordingly.
This lead to larger bundle sizes and slower performance. 
Svelte has much smaller bundle sizes (no library to load) and more efficient JavaScript code, making it more performant than other virtual DOM-based UI libraries . Also if you are not an expert React developer with lots of time on hand to optimize, your application probably rerenders many times unnecessarily.

## Wasn't the status quo with React?
React is broken, and the entirety of its ecosystem is an attempt to repair it. Despite the suggestion of its name, it wasn't as reactive as one might assume, or perhaps it was reactive enough for just Facebook's use case. To develop a web application, a variety of additional functionalities are required. Developers began to address these issues, leading to the emergence of the extensive ecosystem we see today. It's estimated that there are over 20 state packages to choose from within the React ecosystem. In contrast, Svelte doesn't need a multitude of libraries to function effectively, as the existing tools already perform well.
And I've always questioned the need for a virtual DOM.

Why did it become so popular? There must be something it excels at , and that's the power of 'components.' React's popularity soared, partly because many of us don't like Angular's rigid coding structure. Angular imposed a monolithic Spring Boot-like approach.

React offered a liberating component-based architecture, a breath of fresh air. Its syntax evolved positively, providing developers with a more intuitive experience. You might wonder, why not web components then ? Some argue it lacked standard browser support, needing polyfills at that time, or its API wasn't intuitive enough.
Unfortunately, web components never gained the traction they deserved, which is a shame from my perspective.
But computer history is a series of corrections for past mistakes, so I believe the time for web components will come eventually.

Personal preferences always play a big role in these framework choices. For me, I  wasn't a fan of the Spring Boot-like approach and I wasn't a fan of dependency injection either. Patterns like MVC, MVVM, MVP are good but can become impractical or unnecessary in
a small to midsize project where the customer is your product manager.
A development team should have the freedom to choose. 'One size fits all' has never worked in software development.
No development pattern should become bureaucracy.
For ERP I prefer a domain-based structure with a functional approach, offering more agility and meaningful division based on the domain.

React addressed this issue with a component-based approach, giving you the freedom to organize your code as you see fit without enforcing any specific structure. Despite its inherent flaws, React became popular.

## UI5 V2 and Beyond

The UI5 next major version, Version 2, is on its way. So far, the only certainty is that there will be breaking changes. This is perfectly normal for a framework that has been around for over 10 years. I hope one of these changes will offer developers more freedom in their workflow.

Once again, things are changing. React has found ways to address some of its problems by advising people not to use React directly, but instead, integrate it with metaframeworks like Next.js. On the other hand, Svelte, Qwik, SolidJS, Vue, and htmx are gaining traction every day for the right reasons. And we are excitedly waiting for UI5 V2 to come!

If you have time and explore something new and want to dive into Svelte, 

I've created a GitHub repository (GitHub repo XXX) featuring an SAP standard TODO web component sample Svelte application. In this repository, I've made several modifications to incorporate the latest version of Svelte and other related packages, along with Vite.

Additionally, there's a special souce to embed the Svelte TODO application within a UI5 application. This allows for seamless integration with on-premises launchpad or BTP Workzone, and you can use UI5 tooling for deployment.

When you observe the `package.json` file, you'll find a series of scripts. You can develop and use Svelte on its own. When you want to see the embedded version in local test launchpad, you can use the command: `npm run ui5:run:start:lp`.

Exploring and experimenting with new technologies is essential for development growth. It might not change your day-to-day practices, but then again, you never know!

