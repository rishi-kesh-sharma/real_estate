import React from "react";
import Breadcrumb from "@/components/utils/BreadCrumb.jsx";
import BreadcrumbItem from "@/components/utils/BreadCrumbItem.jsx";
import { useRouter } from "next/router";
import { useContext } from "react";
import { appContext } from "@/pages/_app";
import Container from "./Container";
const BreadCrumbContainer = ({ className }) => {
  const router = useRouter();
  const breadcrumbs = useContext(appContext);
  return (
    <Breadcrumb>
      <BreadcrumbItem isCurrent={router.pathname === "/"} href="/">
        Home
      </BreadcrumbItem>
      {breadcrumbs &&
        breadcrumbs.map((breadcrumb) => (
          <BreadcrumbItem
            key={breadcrumb.href}
            href={breadcrumb.href}
            isCurrent={breadcrumb.isCurrent}>
            {breadcrumb.label}
          </BreadcrumbItem>
        ))}
    </Breadcrumb>
  );
};

export default BreadCrumbContainer;
