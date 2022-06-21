import React from "react";
import { Row } from "reactstrap";
import HeaderSection from "../../../components/HeaderSection";
import { useParams } from "react-router";

export default function UserForm() {
  const { id } = useParams();

  return (
    <Row>
      <HeaderSection title={id ? "Update user" : "Create user"} />
    </Row>
  );
}
