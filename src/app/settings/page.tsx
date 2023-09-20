import OverviewForm from "@/components/forms/OverviewForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC } from "react";

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = ({}) => {
  return (
    <div>
      <div className="font-semibold text-3xl mb-5">Settings</div>
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewForm />
        </TabsContent>
        <TabsContent value="socialLinks">
          <div>socialLinks</div>
        </TabsContent>
        <TabsContent value="teams">
          <div>teams</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
