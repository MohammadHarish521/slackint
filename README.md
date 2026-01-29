# Slack Integrations

**Tired of digging through endless documentation?**

Slack Integrations delivers intelligent AI support directly in your Slack workspace, replacing the need for human support engineers entirely. By leveraging advanced RAG (Retrieval-Augmented Generation) and agentic workflows, it provides instant, accurate responses to user queries without leaving Slack.

## 🚀 Key Features

*   **Intelligent AI Support**: Automated, context-aware responses to queries directly within Slack.
*   **Offline Data Pipeline**: Robust ETL and RAG processes handled asynchronously for maximum efficiency.
*   **Online Inference Engine**: Real-time agentic app providing instant answers.
*   **Dockerized Infrastructure**: Fully containerized environments for both offline and online applications, ensuring consistency and scalability.
*   **Cost-Effective**: Pay only for the tools you use (e.g., OpenAI API), with the core infrastructure being open source.
*   **Open Source**: Completely free to use and customize. "Project V1.0 is live".

## 🏗️ Architecture

The project consists of two main Python applications backed by a robust Docker infrastructure:

1.  **Offline Pipeline**: Handles Data Pipelines, ETL, and RAG processes asynchronously.
2.  **Online Inference**: The Agentic App that interfaces with Slack to provide real-time responses.

## 🛠️ Tech Stack

*   **Frontend**: [Next.js 16](https://nextjs.org/) (React 19)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Language**: TypeScript, Python (Backend/AI)
*   **Infrastructure**: Docker

## 🏁 Getting Started

To run the frontend landing page locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/karthikponna/slack_integrations.git
    cd slackint
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Open the app**:
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Contract Address

`FCGLv72C18362Ent3BDNqToracaaM2sYukjTXS7hBAGS`

## 🤝 Contributing

This project is open source and we welcome contributions! Check out the [GitHub repository](https://github.com/karthikponna/slack_integrations/tree/main) for more details.

## 📄 License

This project is open-source.
