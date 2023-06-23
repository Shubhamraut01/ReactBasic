import { Table, Button, Input, Space } from "antd";
import "./App.css";
import { Box } from "@mui/material";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const [cf, setCf] = useState([]);

  useEffect(() => {
    setCf(data);
  }, []);

  console.log(cf);

  const data = [
    {
      Id: "EGYFZA1YL2H70",
      ARN: "arn:aws:cloudfront::243204665306:distribution/EGYFZA1YL2H70",
      Status: "Deployed",

      DomainName: "d2959ez9yp9y9g.cloudfront.net",
      Aliases: { Quantity: 0 },
      Origins: {
        Quantity: 1,
        Items: [
          {
            Id: "fcncc.s3-website-us-east-1.amazonaws.com",
            DomainName: "fcncc.s3-website-us-east-1.amazonaws.com",
            OriginPath: "",
            CustomHeaders: { Quantity: 0 },
            CustomOriginConfig: {
              HTTPPort: 80,
              HTTPSPort: 443,
              OriginProtocolPolicy: "http-only",
              OriginSslProtocols: { Quantity: 1, Items: ["TLSv1.2"] },
              OriginReadTimeout: 30,
              OriginKeepaliveTimeout: 5,
            },
            ConnectionAttempts: 3,
            ConnectionTimeout: 10,
            OriginAccessControlId: "",
          },
        ],
      },
      OriginGroups: { Quantity: 0 },
      DefaultCacheBehavior: {
        TargetOriginId: "fcncc.s3-website-us-east-1.amazonaws.com",

        ViewerProtocolPolicy: "allow-all",
        AllowedMethods: {
          Quantity: 2,
          Items: ["HEAD", "GET"],
          CachedMethods: { Quantity: 2, Items: ["HEAD", "GET"] },
        },
        Compress: true,
        LambdaFunctionAssociations: { Quantity: 0 },
        FunctionAssociations: { Quantity: 0 },
        FieldLevelEncryptionId: "",
        CachePolicyId: "658327ea-f89d-4fab-a63d-7e88639e58f6",
      },
      CacheBehaviors: { Quantity: 0 },
      CustomErrorResponses: { Quantity: 0 },
      Comment: "",
      PriceClass: "PriceClass_All",
      Enabled: true,
      ViewerCertificate: {
        CloudFrontDefaultCertificate: true,
        SSLSupportMethod: "vip",
        MinimumProtocolVersion: "TLSv1",
        CertificateSource: "cloudfront",
      },
      Restrictions: {
        GeoRestriction: { RestrictionType: "none", Quantity: 0 },
      },
      WebACLId: "",
      HttpVersion: "HTTP2",
      IsIPV6Enabled: true,
      Staging: false,
    },
    {
      Id: "E10XWHPFXERRUL",
      ARN: "arn:aws:cloudfront::243204665306:distribution/E10XWHPFXERRUL",
      Status: "Deployed",

      DomainName: "d270r1otqh1tko.cloudfront.net",
      Aliases: { Quantity: 0 },
      Origins: {
        Quantity: 1,
        Items: [
          {
            Id: "fcncc.s3-website-us-east-1.amazonaws.com",
            DomainName: "fcncc.s3-website-us-east-1.amazonaws.com",
            OriginPath: "",
            CustomHeaders: { Quantity: 0 },
            CustomOriginConfig: {
              HTTPPort: 80,
              HTTPSPort: 443,
              OriginProtocolPolicy: "http-only",
              OriginSslProtocols: { Quantity: 1, Items: ["TLSv1.2"] },
              OriginReadTimeout: 30,
              OriginKeepaliveTimeout: 5,
            },
            ConnectionAttempts: 3,
            ConnectionTimeout: 10,
            OriginShield: { Enabled: false },
            OriginAccessControlId: "",
          },
        ],
      },
      OriginGroups: { Quantity: 0 },
      DefaultCacheBehavior: {
        TargetOriginId: "fcncc.s3-website-us-east-1.amazonaws.com",
        TrustedSigners: { Enabled: false, Quantity: 0 },
        TrustedKeyGroups: { Enabled: false, Quantity: 0 },
        ViewerProtocolPolicy: "allow-all",
        AllowedMethods: {
          Quantity: 2,
          Items: ["HEAD", "GET"],
          CachedMethods: { Quantity: 2, Items: ["HEAD", "GET"] },
        },
        SmoothStreaming: false,
        Compress: true,
        LambdaFunctionAssociations: { Quantity: 0 },
        FunctionAssociations: { Quantity: 0 },
        FieldLevelEncryptionId: "",
        CachePolicyId: "658327ea-f89d-4fab-a63d-7e88639e58f6",
      },
      CacheBehaviors: { Quantity: 0 },
      CustomErrorResponses: { Quantity: 0 },
      Comment: "",
      PriceClass: "PriceClass_All",
      Enabled: true,
      ViewerCertificate: {
        CloudFrontDefaultCertificate: true,
        SSLSupportMethod: "vip",
        MinimumProtocolVersion: "TLSv1",
        CertificateSource: "cloudfront",
      },
      Restrictions: {
        GeoRestriction: { RestrictionType: "none", Quantity: 0 },
      },
      WebACLId: "",
      HttpVersion: "HTTP2",
      IsIPV6Enabled: true,
      Staging: false,
    },
  ];

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Sno",

      render: (item, record, index) => {
        const sno = index + 1;
        return (<span>{sno}</span>), sno;
      },
    },
    {
      title: "Distribution",
      dataIndex: "Id",
      key: "Id",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "ARN",
      dataIndex: "ARN",
      key: "ARN",
      ...getColumnSearchProps("ARN"),
    },
    {
      title: "DomainName",
      dataIndex: "DomainName",
      key: "DomainName",
    },
    {
      title: "Quantity",
      // dataIndex: "CacheBehaviors.Quantity",
      key: "Quantity",
      render: (record) => {
        return record.CacheBehaviors.Quantity;
      },
      sorter: (a, b) =>
        a.record.CacheBehaviors.Quantity - b.record.CacheBehaviors.Quantity,
    },
  ];

  return (
    <>
      <h1>The Ant Experiment</h1>
      <Box padding={10} bgcolor={"lightblue"}>
        <br />
        <Table dataSource={cf} columns={columns} rowKey={"PathPattern"} />
      </Box>
    </>
  );
}

export default App;
