package com.green.project_quadruaple.search;

import com.green.project_quadruaple.common.config.enumdata.ResponseCode;
import com.green.project_quadruaple.common.model.Paging;
import com.green.project_quadruaple.common.model.ResponseWrapper;
import com.green.project_quadruaple.search.model.*;
import com.green.project_quadruaple.search.model.strf_list.GetSearchStrfListBasicRes;
import com.green.project_quadruaple.search.model.SearchBasicReq;
<<<<<<< HEAD
import io.swagger.v3.oas.annotations.tags.Tag;
=======
import io.swagger.v3.oas.annotations.Operation;
>>>>>>> 7ae566736101f0cd8002cf83fdfbad25ab3f2d62
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/search") // 겹치지 않도록 설정
@Tag(name = "검색")
public class SearchController {

    private final SearchService searchService;

    // 중복 생성자를 제거하고 아래처럼 정의
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    /*@GetMapping
    public ResponseEntity<Map<String, Object>> getTripLocation(
            @RequestParam(value = "search_word", required = false) String searchWord) {
        long userId = AuthenticationFacade.getSignedUserId(); // JWT에서 유저 ID 추출
        Map<String, Object> response = searchService.getTripLocation(userId, searchWord);
        return ResponseEntity.ok(response);
    }*/


    /*@GetMapping("/location")
    public ResponseEntity<?> getTripLocation(@RequestParam String search_word) {
        System.out.println("Received search_word: " + search_word);
        List<LocationResponse> locations = searchService.getTripLocation(search_word);
        System.out.println("Search results: " + locations);
        if (locations.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("검색 결과가 없습니다.");
        }
        return ResponseEntity.ok(locations);
    }*/
    @GetMapping("/location")
    public ResponseEntity<?> getTripLocation(@RequestParam String search_word) {
        System.out.println("Received search_word: " + search_word); // 디버깅용 로그 추가
        List<LocationResponse> locations = searchService.getTripLocation(search_word);

        if (locations.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("검색 결과가 없습니다.");
        }
        return ResponseEntity.ok(locations);
    }

    @GetMapping("/strf-list-basic")
    @Operation(summary = "일정 추가 검색 기본", description = "일정 추가 검색 화면 처음 접근시 불러올 해당지역 추천 장소들 요청 API")
    public ResponseWrapper<GetSearchStrfListBasicRes> getStrfListBasic(@RequestParam("trip_id") Long tripId,
                                                                       @RequestParam("last_index") int lastIdx)
    {
        return searchService.getStrfListBasic(tripId, lastIdx);
    }

    @GetMapping("/strf-list-word")
    @Operation(summary = "일정 추가 검색", description = "일정 추가 검색, 검색어 입력 시 요청 API, 현재 필터는 카테고리와 검색어 뿐")
    public ResponseWrapper<GetSearchStrfListBasicRes> getStrfListWithSearchWord(@RequestParam("trip_id") Long tripId,
                                                                       @RequestParam("last_index") int lastIdx,
                                                                       @RequestParam(required = false) String category,
                                                                       @RequestParam(value = "search_word", required = false) String searchWord)
    {
        return searchService.getStrfListWithSearchWord(tripId, lastIdx, category, searchWord);
    }





    // 밑으로 상품 검색

    @GetMapping("/basic")
    public ResponseWrapper<?> searchBasicList(@RequestParam("user_id") Long userId) {
        return searchService.searchBasicRecent(userId);
    }

    @GetMapping("/popular")
    public ResponseWrapper<?> searchBasicPopular(){
        return searchService.searchBasicPopular();
    }

    @GetMapping("/all")
    public ResponseWrapper<?> searchAllList(@RequestParam(value = "search_word") String searchWord, @RequestParam String category,
            @RequestParam(value = "user_id", required = false) Long userId, @ModelAttribute List<Long> amenityIds) {

        return searchService.searchAllList(searchWord, category, userId, amenityIds);
    }

//    @GetMapping("/category")
//    public ResponseWrapper<?> searchCategoryWithFilters(@RequestParam(value = "user_id", required = false) Long userId,
//             @RequestParam String category, @RequestParam("amenity_id") List<Long> amenityIds, @ModelAttribute Paging paging) {
//
//        return searchService.searchCategoryWithFilters(userId, category, amenityIds, paging);
//    }





}