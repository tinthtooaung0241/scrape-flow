"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BreadcurmbHeader = () => {
  const pathname = usePathname();
  const paths = pathname === "/" ? [""] : pathname.split("/");
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link className="capitalize" href={`/${path}`}>
                    {path === "" ? "home" : path}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcurmbHeader;
