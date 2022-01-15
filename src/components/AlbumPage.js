
import { utils } from "ethers";
import { HStack, VStack, Box, Stack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/image";
// import { getSubgraphData } from "../../utils/graphQueries";
import { useWeb3Context } from "../contexts/Web3Context";
import {useParams} from 'react-router-dom';

// import {
//   getBalanceFraktions,
//   getMinimumOffer,
//   unlistItem,
//   getApproved,
//   getFraktionsIndex,
//   claimFraktalSold,
//   isFraktalOwner,
// } from "../../../utils/contractCalls";

export default function AlbumPage() {
  const { account, provider, marketAddress, factoryAddress } = useWeb3Context();
  const { albumCID } = useParams()

  return (
    <Box
      sx={{
        display: `grid`,
        gridTemplateColumns: `400px 621px`,
        columnGap: `16px`,
      }}
    >
      <Box sx={{ position: `relative` }}>
        <VStack marginRight="53px" sx={{ position: `sticky`, top: `20px` }}>
{/*
          <Image
            src={nftObject ? nftObject.imageURL : null}
            w="400px"
            h="400px"
            style={{ borderRadius: "4px 4px 0px 0px", objectFit: `cover` }}
          />
*/}
          <HStack justifyContent="space-between" marginTop="16px">
            <VStack>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "14px",
                  letterSpacing: "1px",
                  color: "#A7A7A7",
                }}
              >
                ARTIST
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                {/*nftObject ? shortenHash(nftObject.creator) : "loading"*/}
                {albumCID?albumCID:'Error' }
              </div>
            </VStack>
            <VStack>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "14px",
                  letterSpacing: "1px",
                  color: "#A7A7A7",
                }}
              >
                DATE OF CREATION
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                caca
              </div>
            </VStack>
          </HStack>

        </VStack>
      </Box>

// segunda columna

      <Stack spacing="0" mb="12.8rem">
        <div
          style={{
            fontSize: "48px",
            fontFamily: "Inter",
            fontWeight: 800,
            lineHeight: "64px",
          }}
        >
          todos espacios donde
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: 400,
            lineHeight: "22px",
            marginBottom: "40px",
          }}
        >
          podemos agregar cosas
        </div>
        <div style={{ marginTop: "40px" }}>
          una linea
        </div>
        <div style={{ marginTop: "40px" }}>
          otra
        </div>
        <div style={{ marginTop: "40px" }}>
          y otra
        </div>
      </Stack>
    </Box>
  );
}
