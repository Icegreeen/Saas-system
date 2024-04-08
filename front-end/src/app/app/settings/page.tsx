import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTittle, DashboardPageMain } from "@/components/dashboard/page";

export default function Page() {
    return (
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTittle>Configurações</DashboardPageHeaderTittle>
            </DashboardPageHeader>

            <DashboardPageMain>
                <h1>Configurações</h1>
            </DashboardPageMain>
        </DashboardPage>
    )
}