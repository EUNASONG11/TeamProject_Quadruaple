package com.green.project_quadruaple.booking;

import com.green.project_quadruaple.booking.model.BookingListGetReq;
import com.green.project_quadruaple.booking.model.BookingListResponse;
import com.green.project_quadruaple.booking.model.BookingPostReq;
import com.green.project_quadruaple.booking.model.BookingPostRes;
import com.green.project_quadruaple.common.model.ResponseWrapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("booking")
@RequiredArgsConstructor
@Tag(name = "예약")
public class BookingController {
    private final BookingService bookingService;

    @GetMapping
    @Operation(summary = "예약 목록 불러오기")
    public ResponseWrapper<BookingListResponse> getBooking(BookingListGetReq req) {
        return bookingService.getBooking(req);
    }

    @PostMapping
    @Operation(summary = "예약 등록")
    public ResponseWrapper<String> postBooking(@RequestBody BookingPostReq req) {
        return bookingService.postBooking(req);
    }

    @GetMapping("/pay-approve")
    public String getBookingList(@RequestParam("pg_token") String pgToken) {
        return bookingService.approve(pgToken);
    }
}
