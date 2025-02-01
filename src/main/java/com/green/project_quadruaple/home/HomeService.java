package com.green.project_quadruaple.home;

import com.green.project_quadruaple.common.config.enumdata.ResponseCode;
import com.green.project_quadruaple.common.config.jwt.JwtUser;
import com.green.project_quadruaple.common.config.security.AuthenticationFacade;
import com.green.project_quadruaple.common.model.ResponseWrapper;
import com.green.project_quadruaple.home.res.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class HomeService {
    private final HomeMapper homeMapper;
    private final AuthenticationFacade authenticationFacade;

    //홈화면
    public ResponseEntity<ResponseWrapper<HomeRes>> getHome(){
        List<RecommendFest> recommendFests=new ArrayList<>();
        List<RecentStrf> recentStrfs=new ArrayList<>();
        List<RecommendStrf> recommendStrfs=new ArrayList<>();

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(principal instanceof JwtUser){
            Long userId=authenticationFacade.getSignedUserId();
            recommendFests=homeMapper.getFestival(userId);
            recentStrfs=homeMapper.getRecent(userId);
            recommendStrfs=homeMapper.getRecommend(userId);
        } else {
            recommendFests=homeMapper.getFestivalWithOutUserId();
            recommendStrfs=homeMapper.getRecommendWithOutUserId();
        }
        List<PopularLocation> popularLocations=homeMapper.getPopularLocation();

        HomeRes homeRes=new HomeRes(recommendFests,popularLocations,recentStrfs,recommendStrfs);

        return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK.getCode(),homeRes));
    }

    //마이페이지
    public ResponseEntity<ResponseWrapper<MyPageRes>> myPage(){
        long userId=authenticationFacade.getSignedUserId();
        MyPageRes myPageRes=homeMapper.pushHamburger(userId);
        if(myPageRes==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ResponseWrapper<>(ResponseCode.NOT_FOUND.getCode(), null));
        }
        return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK.getCode(),myPageRes));
    }

}
